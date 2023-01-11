import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1AuditConfig } from "./googleiamv1auditconfig";
import { GoogleIamV1Binding } from "./googleiamv1binding";



export class GoogleIamV1Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditConfigs", elemType: GoogleIamV1AuditConfig })
  auditConfigs?: GoogleIamV1AuditConfig[];

  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: GoogleIamV1Binding })
  bindings?: GoogleIamV1Binding[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
