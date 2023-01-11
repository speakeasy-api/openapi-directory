import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserDocumentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}

export enum GetUserDocumentsOrderByEnum {
    Id = "id",
    UpdatedAt = "updated_at",
    CreatedAt = "created_at",
    Name = "name"
}

export enum GetUserDocumentsTypeFilterEnum {
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


export class GetUserDocumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language_code" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: GetUserDocumentsOrderByEnum;

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
  typeFilter?: GetUserDocumentsTypeFilterEnum;
}


export class GetUserDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserDocumentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserDocumentsQueryParams;
}


export class GetUserDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentList?: shared.DocumentList;

  @SpeakeasyMetadata()
  statusCode: number;
}
