import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Total number of page results
 */
export declare enum SubjectAlternativeNameDetailsStatusEnum {
    Pending = "PENDING",
    Invalid = "INVALID",
    Completed = "COMPLETED",
    Fraud = "FRAUD"
}
export declare class SubjectAlternativeNameDetails extends SpeakeasyBase {
    /**
     * Total number of page results
     */
    status: SubjectAlternativeNameDetailsStatusEnum;
    /**
     * Subject alternative name to be included in certificate
     */
    subjectAlternativeName: string;
}
