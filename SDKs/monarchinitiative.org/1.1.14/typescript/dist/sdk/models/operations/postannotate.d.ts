import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAnnotateRequest extends SpeakeasyBase {
    /**
     * The text content to annotate
     */
    content?: string;
    /**
     * Categories to exclude for annotation
     */
    excludeCategory?: string[];
    /**
     * Should abbreviations be included
     */
    includeAbbreviation?: boolean;
    /**
     * Should acronyms be included
     */
    includeAcronym?: boolean;
    /**
     * Categories to include for annotation
     */
    includeCategory?: string[];
    /**
     * Should numbers be included
     */
    includeNumbers?: boolean;
    /**
     * Should only the longest entity be returned for an overlapping group
     */
    longestOnly?: boolean;
    /**
     * The minimum number of characters in the annotated entity
     */
    minLength?: string;
}
export declare class PostAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
