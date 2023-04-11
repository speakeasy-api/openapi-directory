import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the type of technology used by the confidential instance.
 */
export declare enum ConfidentialInstanceConfigConfidentialInstanceTypeEnum {
    ConfidentialInstanceTypeUnspecified = "CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED",
    Sev = "SEV",
    SevSnp = "SEV_SNP"
}
/**
 * A set of Confidential Instance options.
 */
export declare class ConfidentialInstanceConfig extends SpeakeasyBase {
    /**
     * Defines the type of technology used by the confidential instance.
     */
    confidentialInstanceType?: ConfidentialInstanceConfigConfidentialInstanceTypeEnum;
    /**
     * Defines whether the instance should have confidential compute enabled.
     */
    enableConfidentialCompute?: boolean;
}
