import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Normal BigQuery table specification.
 */
export declare class GoogleCloudDatacatalogV1TableSpec extends SpeakeasyBase {
    /**
     * Output only. If the table is date-sharded, that is, it matches the `[prefix]YYYYMMDD` name pattern, this field is the Data Catalog resource name of the date-sharded grouped entry. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. Otherwise, `grouped_entry` is empty.
     */
    groupedEntry?: string;
}
