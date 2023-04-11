import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSearchRequest extends SpeakeasyBase {
    /**
     * Up to 200 documents to search over, provided as a list of strings.
     *
     * @remarks
     *
     * The maximum document length (in tokens) is 2034 minus the number of tokens in the query.
     *
     * You should specify either `documents` or a `file`, but not both.
     *
     */
    documents?: string[];
    /**
     * The ID of an uploaded file that contains documents to search over.
     *
     * @remarks
     *
     * You should specify either `documents` or a `file`, but not both.
     *
     */
    file?: string;
    /**
     * The maximum number of documents to be re-ranked and returned by search.
     *
     * @remarks
     *
     * This flag only takes effect when `file` is set.
     *
     */
    maxRerank?: number;
    /**
     * Query to search against the documents.
     */
    query: string;
    /**
     * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "metadata" field.
     *
     * @remarks
     *
     * This flag only takes effect when `file` is set.
     *
     */
    returnMetadata?: boolean;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     *
     * @remarks
     *
     */
    user?: string;
}
