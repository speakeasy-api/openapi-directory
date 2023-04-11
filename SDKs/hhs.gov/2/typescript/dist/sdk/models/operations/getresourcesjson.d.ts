import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetResourcesJsonRequest extends SpeakeasyBase {
    /**
     * The search query supplied by the user
     */
    q: string;
}
export declare class GetResourcesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * "Returns the list of Resources matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>."
     */
    resourceWrappeds?: any[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
