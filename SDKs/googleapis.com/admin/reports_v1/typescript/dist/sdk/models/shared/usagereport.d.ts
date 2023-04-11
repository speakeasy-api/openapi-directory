import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Information about the type of the item.
 */
export declare class UsageReportEntity extends SpeakeasyBase {
    /**
     * Output only. The unique identifier of the customer's account.
     */
    customerId?: string;
    /**
     * Output only. Object key. Only relevant if entity.type = "OBJECT" Note: external-facing name of report is "Entities" rather than "Objects".
     */
    entityId?: string;
    /**
     * Output only. The user's immutable Google Workspace profile identifier.
     */
    profileId?: string;
    /**
     * Output only. The type of item. The value is `user`.
     */
    type?: string;
    /**
     * Output only. The user's email address. Only relevant if entity.type = "USER"
     */
    userEmail?: string;
}
export declare class UsageReportParameters extends SpeakeasyBase {
    /**
     * Output only. Boolean value of the parameter.
     */
    boolValue?: boolean;
    /**
     * The RFC 3339 formatted value of the parameter, for example 2010-10-28T10:26:35.000Z.
     */
    datetimeValue?: Date;
    /**
     * Output only. Integer value of the parameter.
     */
    intValue?: string;
    /**
     * Output only. Nested message value of the parameter.
     */
    msgValue?: Record<string, any>[];
    /**
     * The name of the parameter. For the User Usage Report parameter names, see the User Usage parameters reference.
     */
    name?: string;
    /**
     * Output only. String value of the parameter.
     */
    stringValue?: string;
}
/**
 * JSON template for a usage report.
 */
export declare class UsageReport extends SpeakeasyBase {
    /**
     * Output only. The date of the report request.
     */
    date?: string;
    /**
     * Output only. Information about the type of the item.
     */
    entity?: UsageReportEntity;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of API resource. For a usage report, the value is `admin#reports#usageReport`.
     */
    kind?: string;
    /**
     * Output only. Parameter value pairs for various applications. For the Entity Usage Report parameters and values, see [the Entity Usage parameters reference](/admin-sdk/reports/v1/reference/usage-ref-appendix-a/entities).
     */
    parameters?: UsageReportParameters[];
}
