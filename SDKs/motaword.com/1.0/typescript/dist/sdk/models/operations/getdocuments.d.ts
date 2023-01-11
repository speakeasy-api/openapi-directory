import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
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
export declare class GetDocumentsQueryParams extends SpeakeasyBase {
    languageCode?: string;
    orderBy?: GetDocumentsOrderByEnum;
    orderType?: shared.ListOrderTypeEnum;
    page?: number;
    perPage?: number;
    recent?: boolean;
    search?: string;
    typeFilter?: GetDocumentsTypeFilterEnum;
    with?: GetDocumentsWithEnum[];
}
export declare class GetDocumentsRequest extends SpeakeasyBase {
    queryParams: GetDocumentsQueryParams;
}
export declare class GetDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    documentList?: shared.DocumentList;
    statusCode: number;
}
