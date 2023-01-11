import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOntologyTermsSharedAncestorPathParams extends SpeakeasyBase {
    object: string;
    subject: string;
}
export declare class GetOntologyTermsSharedAncestorRequest extends SpeakeasyBase {
    pathParams: GetOntologyTermsSharedAncestorPathParams;
}
export declare class GetOntologyTermsSharedAncestorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
