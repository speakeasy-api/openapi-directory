/**
 * Semantics controls the interpretation of the query string by the
 *
 * @remarks
 * server, and can be used to override the default semantics assigned
 * in the corpus definition.
 *
 *
 *
 *
 *  - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.
 *  - QUERY: Use query semantics.  This is also common.
 *  - RESPONSE: Use response semantics.  Usage of this is rare.
 */
export declare enum CorpusKeySemanticsEnum {
    Default = "DEFAULT",
    Query = "QUERY",
    Response = "RESPONSE"
}
