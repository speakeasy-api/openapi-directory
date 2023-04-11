import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SchemaResponseDeleteRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Registration Schema example `6176c9d45e01f100091d4f94`.
     */
    schemaResponseId: string;
}
export declare class SchemaResponseDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
