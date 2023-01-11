import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScanProfileEnum } from "./scanprofileenum";
import { Asset } from "./asset";
import { ChangedBy } from "./changedby";
import { EnvironmentEnum } from "./environmentenum";
import { ReportTypeEnum } from "./reporttypeenum";
import { Site } from "./site";
import { TargetTypeEnum } from "./targettypeenum";
import { SiteInput } from "./site";



export class TargetAllowedScanProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: ScanProfileEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_scan_profiles", elemType: TargetAllowedScanProfiles })
  allowedScanProfiles?: TargetAllowedScanProfiles[];

  @SpeakeasyMetadata({ data: "json, name=assets", elemType: Asset })
  assets?: Asset[];

  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=connected_target" })
  connectedTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: ReportTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scan_profile" })
  scanProfile?: ScanProfileEnum;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: Site;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TargetTypeEnum;
}


export class TargetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connected_target" })
  connectedTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: ReportTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scan_profile" })
  scanProfile?: ScanProfileEnum;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: SiteInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TargetTypeEnum;
}
