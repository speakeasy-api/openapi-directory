import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTransformDefinitionRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The transform definition object to be executed against the report data.
     */
    transformDefinition: shared.TransformDefinition;
    /**
     * The transform definition unique identifier.
     */
    transformDefinitionId: string;
}
export declare class PutTransformDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The transform definition object.
     */
    transformDefinition?: shared.TransformDefinition;
}
