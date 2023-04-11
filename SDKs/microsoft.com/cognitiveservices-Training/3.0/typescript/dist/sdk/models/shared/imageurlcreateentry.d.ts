import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
export declare class ImageUrlCreateEntry extends SpeakeasyBase {
    regions?: Region[];
    tagIds?: string[];
    /**
     * Url of the image.
     */
    url: string;
}
