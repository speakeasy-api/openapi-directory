import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
export declare class ImageIdCreateEntry extends SpeakeasyBase {
    /**
     * Id of the image.
     */
    id?: string;
    regions?: Region[];
    tagIds?: string[];
}
