import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BadWordFilterRequestBody extends SpeakeasyBase {
    /**
     * Which catalog of bad words to use, we currently maintain two bad word catalogs: <br> <ul> <li>strict - the largest database of bad words which includes profanity, obscenity, sexual, rude, cuss, dirty, swear and objectionable words and phrases. This catalog is suitable for environments of all ages including educational or children's content</li> <li>obscene - like the strict catalog but does not include any mild profanities, idiomatic phrases or words which are considered formal terminology. This catalog is suitable for adult environments where certain types of bad words are considered OK</li> </ul>
     */
    catalog?: string;
    /**
     * The character to use to censor out the bad words found
     */
    censorCharacter?: string;
    /**
     * The content to scan. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string
     */
    content: string;
}
export declare class BadWordFilterResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    badWordFilterResponse?: shared.BadWordFilterResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
