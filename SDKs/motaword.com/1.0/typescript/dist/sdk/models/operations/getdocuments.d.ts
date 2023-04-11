import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDocumentsOrderByEnum {
    Id = "id",
    UpdatedAt = "updated_at",
    CreatedAt = "created_at",
    Name = "name"
}
export declare enum GetDocumentsTypeFilterEnum {
    All = "ALL",
    TextDocuments = "TEXT_DOCUMENTS",
    Presentations = "PRESENTATIONS",
    Spreadsheets = "SPREADSHEETS",
    Pdfs = "PDFS",
    Images = "IMAGES",
    Subtitles = "SUBTITLES",
    Designs = "DESIGNS",
    Localization = "LOCALIZATION",
    Web = "WEB",
    StyleGuides = "STYLE_GUIDES",
    Glossaries = "GLOSSARIES"
}
export declare enum GetDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}
export declare class GetDocumentsRequest extends SpeakeasyBase {
    /**
     * searches in source language of documents, in source and target languages of document's quote
     */
    languageCode?: string;
    orderBy?: GetDocumentsOrderByEnum;
    orderType?: shared.ListOrderTypeEnum;
    page?: number;
    perPage?: number;
    /**
     * When true, this will return the most 4 recent active documents.
     */
    recent?: boolean;
    search?: string;
    typeFilter?: GetDocumentsTypeFilterEnum;
    /**
     * Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
     */
    with?: GetDocumentsWithEnum[];
}
export declare class GetDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Document list
     */
    documentList?: shared.DocumentList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
