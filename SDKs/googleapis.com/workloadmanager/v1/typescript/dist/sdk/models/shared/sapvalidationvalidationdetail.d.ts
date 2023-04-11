import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SAP system that the validation data is from.
 */
export declare enum SapValidationValidationDetailSapValidationTypeEnum {
    SapValidationTypeUnspecified = "SAP_VALIDATION_TYPE_UNSPECIFIED",
    System = "SYSTEM",
    Corosync = "COROSYNC",
    Pacemaker = "PACEMAKER",
    Hana = "HANA",
    Netweaver = "NETWEAVER"
}
/**
 * Message describing the SAP validation metrics.
 */
export declare class SapValidationValidationDetail extends SpeakeasyBase {
    /**
     * The pairs of metrics data: field name & field value.
     */
    details?: Record<string, string>;
    /**
     * The SAP system that the validation data is from.
     */
    sapValidationType?: SapValidationValidationDetailSapValidationTypeEnum;
}
