import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Schema Response Block example `61b79f9eadbb5701424a2d5e`.
     */
    schemaResponseBlockId: string;
    /**
     * The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.
     */
    schemaResponseId: string;
}
/**
 * A string that represents the type of input that the schema will take and the UI element that appears to the user on the frontend.
 */
export declare enum GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockAttributesBlockTypeEnum {
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
export declare class GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockAttributes extends SpeakeasyBase {
    /**
     * A string that represents the type of input that the schema will take and the UI element that appears to the user on the frontend.
     */
    blockType?: GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockAttributesBlockTypeEnum;
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
export declare class GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for a Registration Schema Block.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the Schema Response Action.
 */
export declare class GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockRelationships extends SpeakeasyBase {
    /**
     * A link to the schema the the Registration Schema Block is on.
     */
    schema?: string;
}
/**
 * OK
 */
export declare class GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlock extends SpeakeasyBase {
    /**
     * The attributes of the Registration Schema Block.
     */
    attributes?: GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockAttributes;
    /**
     * The unique identifier of the Registration Schema Block.
     */
    id?: string;
    /**
     * URLs to alternative representations of the  Registration Schema Block.
     */
    links?: GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the Schema Response Action.
     */
    relationships?: GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRegistrationSchemaBlockRelationships;
    /**
     * The type identifier of the Registration Schema Block (`schema-blocks`).
     */
    type?: string;
}
export declare class GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
