import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUserDocumentsOrderByEnum {
    Id = "id",
    UpdatedAt = "updated_at",
    CreatedAt = "created_at",
    Name = "name"
}
export declare enum GetUserDocumentsTypeFilterEnum {
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
export declare class GetUserDocumentsRequest extends SpeakeasyBase {
    /**
     * searches in source language of documents, in source and target languages of document's quote
     */
    languageCode?: string;
    orderBy?: GetUserDocumentsOrderByEnum;
    orderType?: shared.ListOrderTypeEnum;
    page?: number;
    perPage?: number;
    /**
     * When true, this will return the most 4 recent active documents.
     */
    recent?: boolean;
    search?: string;
    typeFilter?: GetUserDocumentsTypeFilterEnum;
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Document list
     */
    documentList?: shared.DocumentList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
