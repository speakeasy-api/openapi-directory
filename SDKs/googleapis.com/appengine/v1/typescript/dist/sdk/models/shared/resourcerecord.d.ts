import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource record type. Example: AAAA.
 */
export declare enum ResourceRecordTypeEnum {
    RecordTypeUnspecified = "RECORD_TYPE_UNSPECIFIED",
    A = "A",
    Aaaa = "AAAA",
    Cname = "CNAME"
}
/**
 * A DNS resource record.
 */
export declare class ResourceRecord extends SpeakeasyBase {
    /**
     * Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
     */
    name?: string;
    /**
     * Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
     */
    rrdata?: string;
    /**
     * Resource record type. Example: AAAA.
     */
    type?: ResourceRecordTypeEnum;
}
