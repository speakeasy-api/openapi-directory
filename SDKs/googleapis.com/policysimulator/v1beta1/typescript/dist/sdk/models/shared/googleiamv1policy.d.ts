import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1AuditConfig } from "./googleiamv1auditconfig";
import { GoogleIamV1Binding } from "./googleiamv1binding";
export declare class GoogleIamV1Policy extends SpeakeasyBase {
    auditConfigs?: GoogleIamV1AuditConfig[];
    bindings?: GoogleIamV1Binding[];
    etag?: string;
    version?: number;
}
