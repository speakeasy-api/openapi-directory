import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
 */
export declare class GoogleHomeEnterpriseSdmV1Room extends SpeakeasyBase {
    /**
     * Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123".
     */
    name?: string;
    /**
     * Room traits.
     */
    traits?: Record<string, any>;
}
