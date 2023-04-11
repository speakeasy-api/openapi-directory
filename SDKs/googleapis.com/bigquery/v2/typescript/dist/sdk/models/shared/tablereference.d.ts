import { SpeakeasyBase } from "../../../internal/utils";
export declare class TableReference extends SpeakeasyBase {
    /**
     * [Required] The ID of the dataset containing this table.
     */
    datasetId?: string;
    /**
     * [Required] The ID of the project containing this table.
     */
    projectId?: string;
    /**
     * [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    tableId?: string;
}
