import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Upload success
 */
export declare class Example extends SpeakeasyBase {
    /**
     * Date and time that the example was created.
     */
    createdAt?: Date;
    /**
     * ID of the example.
     */
    id: number;
    /**
     * Contains information about the label with which the example is associated.
     */
    label?: Label;
    /**
     * URL of the image in the dataset. This is a temporary URL that expires in 30 minutes. This URL can be used to display images that were uploaded to a dataset in a UI.
     */
    location?: string;
    /**
     * Name of the example.
     */
    name: string;
    /**
     * Object returned; in this case, example.
     */
    object?: string;
}
