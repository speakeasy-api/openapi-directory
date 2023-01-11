import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserDocumentsPathParams extends SpeakeasyBase {
    userId: number;
}
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
export declare class GetUserDocumentsQueryParams extends SpeakeasyBase {
    languageCode?: string;
    orderBy?: GetUserDocumentsOrderByEnum;
    orderType?: shared.ListOrderTypeEnum;
    page?: number;
    perPage?: number;
    recent?: boolean;
    search?: string;
    typeFilter?: GetUserDocumentsTypeFilterEnum;
}
export declare class GetUserDocumentsRequest extends SpeakeasyBase {
    pathParams: GetUserDocumentsPathParams;
    queryParams: GetUserDocumentsQueryParams;
}
export declare class GetUserDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    documentList?: shared.DocumentList;
    statusCode: number;
}
