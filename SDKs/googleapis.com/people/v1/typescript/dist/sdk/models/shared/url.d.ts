import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's associated URLs.
**/
export declare class Url extends SpeakeasyBase {
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: string;
    value?: string;
}
/**
 * A person's associated URLs.
**/
export declare class UrlInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    type?: string;
    value?: string;
}
