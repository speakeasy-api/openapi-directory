import { SpeakeasyBase } from "../../../internal/utils";
import { DateDetails } from "./datedetails";
import { LabeledItem } from "./labeleditem";
import { LookupDetails } from "./lookupdetails";
import { RelationshipDetails } from "./relationshipdetails";
/**
 * Details on a column in the table.
 */
export declare class ColumnDescription extends SpeakeasyBase {
    /**
     * Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website.
     */
    dataType?: string;
    /**
     * Details about a date column.
     */
    dateDetails?: DateDetails;
    /**
     * Internal id for a column.
     */
    id?: string;
    /**
     * Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation.
     */
    labels?: LabeledItem[];
    /**
     * Details about a lookup column whose value comes from the associated relationship.
     */
    lookupDetails?: LookupDetails;
    /**
     * Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible.
     */
    multipleValuesDisallowed?: boolean;
    /**
     * column name
     */
    name?: string;
    /**
     * Optional. Indicates that values for the column cannot be set by the user.
     */
    readonly?: boolean;
    /**
     * Details about a relationship column.
     */
    relationshipDetails?: RelationshipDetails;
}
