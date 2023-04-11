import { SpeakeasyBase } from "../../../internal/utils";
export declare class NAWelcomeFace extends SpeakeasyBase {
    /**
     * Id of the face.
     */
    id?: string;
    /**
     * Key for this face to use in getcamerapicture.
     */
    key?: string;
    /**
     * Version of the face if user changed their photo.
     */
    version?: number;
}
