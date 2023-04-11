import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's past or current organization. Overlapping date ranges are permitted.
 */
export declare class Organization extends SpeakeasyBase {
    /**
     * The person's cost center at the organization.
     */
    costCenter?: string;
    /**
     * True if the organization is the person's current organization; false if the organization is a past organization.
     */
    current?: boolean;
    /**
     * The person's department at the organization.
     */
    department?: string;
    /**
     * The domain name associated with the organization; for example, `google.com`.
     */
    domain?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    endDate?: Date;
    /**
     * Output only. The type of the organization translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * The person's full-time equivalent millipercent within the organization (100000 = 100%).
     */
    fullTimeEquivalentMillipercent?: number;
    /**
     * The person's job description at the organization.
     */
    jobDescription?: string;
    /**
     * The location of the organization office the person works at.
     */
    location?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The name of the organization.
     */
    name?: string;
    /**
     * The phonetic name of the organization.
     */
    phoneticName?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    startDate?: Date;
    /**
     * The symbol associated with the organization; for example, a stock ticker symbol, abbreviation, or acronym.
     */
    symbol?: string;
    /**
     * The person's job title at the organization.
     */
    title?: string;
    /**
     * The type of the organization. The type can be custom or one of these predefined values: * `work` * `school`
     */
    type?: string;
}
/**
 * A person's past or current organization. Overlapping date ranges are permitted.
 */
export declare class OrganizationInput extends SpeakeasyBase {
    /**
     * The person's cost center at the organization.
     */
    costCenter?: string;
    /**
     * True if the organization is the person's current organization; false if the organization is a past organization.
     */
    current?: boolean;
    /**
     * The person's department at the organization.
     */
    department?: string;
    /**
     * The domain name associated with the organization; for example, `google.com`.
     */
    domain?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    endDate?: Date;
    /**
     * The person's full-time equivalent millipercent within the organization (100000 = 100%).
     */
    fullTimeEquivalentMillipercent?: number;
    /**
     * The person's job description at the organization.
     */
    jobDescription?: string;
    /**
     * The location of the organization office the person works at.
     */
    location?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The name of the organization.
     */
    name?: string;
    /**
     * The phonetic name of the organization.
     */
    phoneticName?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    startDate?: Date;
    /**
     * The symbol associated with the organization; for example, a stock ticker symbol, abbreviation, or acronym.
     */
    symbol?: string;
    /**
     * The person's job title at the organization.
     */
    title?: string;
    /**
     * The type of the organization. The type can be custom or one of these predefined values: * `work` * `school`
     */
    type?: string;
}
