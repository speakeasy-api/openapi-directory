import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoLogSettings } from "./enterprisecrmeventbusprotologsettings";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
/**
 * Things like URL, Email, Currency, Timestamp (rather than string, int64...)
 */
export declare enum EnterpriseCrmEventbusProtoAttributesDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Email = "EMAIL",
    Url = "URL",
    Currency = "CURRENCY",
    Timestamp = "TIMESTAMP",
    DomainName = "DOMAIN_NAME"
}
export declare enum EnterpriseCrmEventbusProtoAttributesSearchableEnum {
    Unspecified = "UNSPECIFIED",
    Yes = "YES",
    No = "NO"
}
/**
 * Attributes are additional options that can be associated with each event property. For more information, see
 */
export declare class EnterpriseCrmEventbusProtoAttributes extends SpeakeasyBase {
    /**
     * Things like URL, Email, Currency, Timestamp (rather than string, int64...)
     */
    dataType?: EnterpriseCrmEventbusProtoAttributesDataTypeEnum;
    /**
     * Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
     */
    defaultValue?: EnterpriseCrmEventbusProtoValueType;
    /**
     * Required for event execution. The validation will be done by the event bus when the event is triggered.
     */
    isRequired?: boolean;
    /**
     * Used to indicate if a ParameterEntry should be converted to ParamIndexes for ST-Spanner full-text search. DEPRECATED: use searchable.
     */
    isSearchable?: boolean;
    /**
     * The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information.
     */
    logSettings?: EnterpriseCrmEventbusProtoLogSettings;
    searchable?: EnterpriseCrmEventbusProtoAttributesSearchableEnum;
    /**
     * List of tasks that can view this property, if empty then all.
     */
    taskVisibility?: string[];
}
