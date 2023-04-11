import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprintsCitationReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the preprint.
     */
    preprintId: string;
    /**
     * The unique identifier of the citation style.
     */
    styleId: string;
}
/**
 * The properties of the citation style entity.
 */
export declare class PreprintsCitationReadStyledCitationAttributes extends SpeakeasyBase {
    /**
     * The complete entity citation in the requested style.
     */
    citation?: string;
}
export declare class PreprintsCitationReadStyledCitation extends SpeakeasyBase {
    /**
     * The properties of the citation style entity.
     */
    attributes?: PreprintsCitationReadStyledCitationAttributes;
    /**
     * The identifier of the citation style, e.g. APA.
     */
    id?: string;
    /**
     * The type identifier of the citation style entity (`styled-citations`).
     */
    type?: string;
}
export declare class PreprintsCitationReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
