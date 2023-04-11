import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SchemaResponseBlocksReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.
     */
    schemaResponseId: string;
}
/**
 * A string that represents the type of input that the schema will take and the UI element that appears to the user on the frontend.
 */
export declare enum SchemaResponseBlocksReadRegistrationSchemaBlockAttributesBlockTypeEnum {
    PageHeading = "page-heading",
    SectionHeading = "section-heading",
    SubsectionHeading = "subsection-heading",
    Paragraph = "paragraph",
    QuestionLabel = "question-label",
    ShortTextInput = "short-text-input",
    LongTextInput = "long-text-input",
    FileInput = "file-input",
    ContributorsInput = "contributors-input",
    SingleSelectInput = "single-select-input",
    MultiSelectInput = "multi-select-input",
    SelectInputOption = "select-input-option",
    SelectOtherOption = "select-other-option"
}
/**
 * The attributes of the Registration Schema Block.
 */
export declare class SchemaResponseBlocksReadRegistrationSchemaBlockAttributes extends SpeakeasyBase {
    /**
     * A string that represents the type of input that the schema will take and the UI element that appears to the user on the frontend.
     */
    blockType?: SchemaResponseBlocksReadRegistrationSchemaBlockAttributesBlockTypeEnum;
    /**
     * The text that will accompany the UI element displayed on this Registration Schema Block.
     */
    displayText?: string;
    /**
     * The text that will accompany the UI element displayed on this Registration Schema Block.
     */
    exampleText?: string;
    /**
     * Integer beginning at zero that represents the order of Registration Schema Block in the Registration Schema.
     */
    index?: number;
    /**
     * This string is the the block key for the Registration Schema Block's corresponding block on the Schema Response.
     */
    registrationResponseKey?: string;
    /**
     * Bool that represents if this field is required for creation of a Schema Response.
     */
    required?: boolean;
    /**
     * This string indicates if a block is part of a block group, block groups may contain the different options dropdown menu or a group of inputs and display elements that are validated together.
     */
    schemaBlockGroupKey?: string;
}
/**
 * URLs to alternative representations of the  Registration Schema Block.
 */
export declare class SchemaResponseBlocksReadRegistrationSchemaBlockLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for a Registration Schema Block.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the Schema Response Action.
 */
export declare class SchemaResponseBlocksReadRegistrationSchemaBlockRelationships extends SpeakeasyBase {
    /**
     * A link to the schema the the Registration Schema Block is on.
     */
    schema?: string;
}
/**
 * OK
 */
export declare class SchemaResponseBlocksReadRegistrationSchemaBlock extends SpeakeasyBase {
    /**
     * The attributes of the Registration Schema Block.
     */
    attributes?: SchemaResponseBlocksReadRegistrationSchemaBlockAttributes;
    /**
     * The unique identifier of the Registration Schema Block.
     */
    id?: string;
    /**
     * URLs to alternative representations of the  Registration Schema Block.
     */
    links?: SchemaResponseBlocksReadRegistrationSchemaBlockLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the Schema Response Action.
     */
    relationships?: SchemaResponseBlocksReadRegistrationSchemaBlockRelationships;
    /**
     * The type identifier of the Registration Schema Block (`schema-blocks`).
     */
    type?: string;
}
export declare class SchemaResponseBlocksReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
