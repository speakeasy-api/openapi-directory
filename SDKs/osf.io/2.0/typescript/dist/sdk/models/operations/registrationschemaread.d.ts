import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegistrationSchemaReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.
     */
    registrationSchemaId: string;
}
/**
 * The attributes of the Registration Schema.
 */
export declare class RegistrationSchemaReadRegistrationSchemaAttributes extends SpeakeasyBase {
    /**
     * Bool that represents whether the Registration Schema is active.
     */
    active?: boolean;
    /**
     * The name of the Registration Schema
     */
    name?: string;
    /**
     * This dictionary is the raw schema that originally defined the Registration Schema object and it's blocks.
     */
    schema?: Record<string, Record<string, any>>;
    /**
     * The version of this Registration Schema
     */
    schemaVersion?: number;
}
/**
 * URLs that link to alternative representations of the Registration Schema.
 */
export declare class RegistrationSchemaReadRegistrationSchemaLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for a Registration Schema.
     */
    self?: string;
}
/**
 * Links to other entities or entity collections that have a relationship to the Registration Schema.
 */
export declare class RegistrationSchemaReadRegistrationSchemaRelationships extends SpeakeasyBase {
    /**
     * A link to the list of schema blocks that contain the question prompt information for the Registration Schema.
     */
    schemaBlocks?: string;
}
/**
 * OK
 */
export declare class RegistrationSchemaReadRegistrationSchema extends SpeakeasyBase {
    /**
     * The attributes of the Registration Schema.
     */
    attributes?: RegistrationSchemaReadRegistrationSchemaAttributes;
    /**
     * The unique identifier of the Registration Schema.
     */
    id?: string;
    /**
     * URLs that link to alternative representations of the Registration Schema.
     */
    links?: RegistrationSchemaReadRegistrationSchemaLinks;
    /**
     * Links to other entities or entity collections that have a relationship to the Registration Schema.
     */
    relationships?: RegistrationSchemaReadRegistrationSchemaRelationships;
    /**
     * The type identifier of the Registration Schema (`registration-schemas`).
     */
    type?: string;
}
export declare class RegistrationSchemaReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
