import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of generated IDs which can be provided in insert requests
 */
export declare class GeneratedIds extends SpeakeasyBase {
    /**
     * The IDs generated for the requesting user in the specified space.
     */
    ids?: string[];
    /**
     * This is always drive#generatedIds
     */
    kind?: string;
    /**
     * The type of file that can be created with these IDs.
     */
    space?: string;
}
