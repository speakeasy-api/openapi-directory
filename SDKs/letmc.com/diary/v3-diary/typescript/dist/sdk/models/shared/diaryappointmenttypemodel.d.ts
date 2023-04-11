import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The appointment system type.
 */
export declare enum DiaryAppointmentTypeModelSystemTypeEnum {
    Viewing = "Viewing",
    ViewAndValue = "ViewAndValue",
    OpeningInspection = "OpeningInspection",
    InterimInspection = "InterimInspection",
    ClosingInspection = "ClosingInspection",
    SalesAppraisal = "SalesAppraisal",
    Custom = "Custom"
}
/**
 * Represents a diary appointment type.
 */
export declare class DiaryAppointmentTypeModel extends SpeakeasyBase {
    /**
     * A unique identifier defining the object and change revision.
     */
    eTag?: string;
    /**
     * The appointment type name.
     */
    name?: string;
    /**
     * The unique Object ID (OID).
     */
    oid?: string;
    /**
     * The appointment system type.
     */
    systemType?: DiaryAppointmentTypeModelSystemTypeEnum;
}
