import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's gender.
**/
export declare class Gender extends SpeakeasyBase {
    addressMeAs?: string;
    formattedValue?: string;
    metadata?: FieldMetadata;
    value?: string;
}
/**
 * A person's gender.
**/
export declare class GenderInput extends SpeakeasyBase {
    addressMeAs?: string;
    metadata?: FieldMetadataInput;
    value?: string;
}
