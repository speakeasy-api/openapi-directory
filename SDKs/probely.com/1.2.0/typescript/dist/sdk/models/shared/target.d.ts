import { SpeakeasyBase } from "../../../internal/utils";
import { ScanProfileEnum } from "./scanprofileenum";
import { Asset } from "./asset";
import { ChangedBy } from "./changedby";
import { EnvironmentEnum } from "./environmentenum";
import { ReportTypeEnum } from "./reporttypeenum";
import { Site } from "./site";
import { TargetTypeEnum } from "./targettypeenum";
import { SiteInput } from "./site";
export declare class TargetAllowedScanProfiles extends SpeakeasyBase {
    id?: ScanProfileEnum;
    name?: string;
}
export declare class Target extends SpeakeasyBase {
    allowedScanProfiles?: TargetAllowedScanProfiles[];
    assets?: Asset[];
    changed?: Date;
    changedBy?: ChangedBy;
    connectedTarget?: string;
    enabled?: boolean;
    environment?: EnvironmentEnum;
    id?: string;
    labels?: string[];
    name?: string;
    reportType?: ReportTypeEnum;
    scanProfile?: ScanProfileEnum;
    site?: Site;
    type?: TargetTypeEnum;
}
export declare class TargetInput extends SpeakeasyBase {
    connectedTarget?: string;
    environment?: EnvironmentEnum;
    labels?: string[];
    name?: string;
    reportType?: ReportTypeEnum;
    scanProfile?: ScanProfileEnum;
    site?: SiteInput;
    type?: TargetTypeEnum;
}
