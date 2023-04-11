import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Structure resource represents an instance of enterprise managed home or hotel room.
 */
export declare class GoogleHomeEnterpriseSdmV1Structure extends SpeakeasyBase {
    /**
     * Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC".
     */
    name?: string;
    /**
     * Structure traits.
     */
    traits?: Record<string, any>;
}
