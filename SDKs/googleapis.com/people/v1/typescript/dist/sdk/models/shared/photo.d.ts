import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A person's photo. A picture shown next to the person's name to help others recognize the person.
 */
export declare class Photo extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The URL of the photo. You can change the desired size by appending a query parameter `sz={size}` at the end of the url, where {size} is the size in pixels. Example: https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50
     */
    url?: string;
}
