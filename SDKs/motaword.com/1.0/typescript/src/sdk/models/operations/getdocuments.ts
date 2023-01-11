import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDocumentsOrderByEnum {
    Id = "id",
    UpdatedAt = "updated_at",
    CreatedAt = "created_at",
    Name = "name"
}

export enum GetDocumentsTypeFilterEnum {
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

export enum GetDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}


export class GetDocumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language_code" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: GetDocumentsOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_type" })
  orderType?: shared.ListOrderTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recent" })
  recent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type_filter" })
  typeFilter?: GetDocumentsTypeFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with[]" })
  with?: GetDocumentsWithEnum[];
}


export class GetDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDocumentsQueryParams;
}


export class GetDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentList?: shared.DocumentList;

  @SpeakeasyMetadata()
  statusCode: number;
}
