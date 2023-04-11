import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of generated file IDs which can be provided in create requests.
 */
export declare class GeneratedIds extends SpeakeasyBase {
    /**
     * The IDs generated for the requesting user in the specified space.
     */
    ids?: string[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#generatedIds".
     */
    kind?: string;
    /**
     * The type of file that can be created with these IDs.
     */
    space?: string;
}
