import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A program that stations can subscribe to to get live or file content.
 */
export declare class Program extends SpeakeasyBase {
    /**
     * The date the segment was created. Generated at creation.
     */
    createdDate?: Date;
    /**
     * The ID of the customer that owns this program.
     */
    customerId?: number;
    /**
     * The unique ID of the program. Generated at creation.
     */
    id?: number;
    /**
     * The date the program was last modified/updated. Automatically updated on any write operation.
     */
    lastModifiedDate?: Date;
    /**
     * The title of the program.
     */
    title: string;
}
