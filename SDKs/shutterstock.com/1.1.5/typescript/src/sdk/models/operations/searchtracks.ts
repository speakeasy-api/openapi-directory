import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchTracksLibraryEnum {
    Shutterstock = "shutterstock",
    Premier = "premier"
}

export enum SearchTracksSortEnum {
    Score = "score",
    RankingAll = "ranking_all",
    Artist = "artist",
    Title = "title",
    Bpm = "bpm",
    Freshness = "freshness",
    Duration = "duration"
}

export enum SearchTracksSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum SearchTracksViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class SearchTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artists" })
  artists?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bpm" })
  bpm?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bpm_from" })
  bpmFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bpm_to" })
  bpmTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration_from" })
  durationFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration_to" })
  durationTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genre" })
  genre?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instruments" })
  instruments?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_instrumental" })
  isInstrumental?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=library" })
  library?: SearchTracksLibraryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=moods" })
  moods?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchTracksSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: SearchTracksSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: SearchTracksViewEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vocal_description" })
  vocalDescription?: string;
}


export class SearchTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class SearchTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTracksQueryParams;

  @SpeakeasyMetadata()
  security: SearchTracksSecurity;
}


export class SearchTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  audioSearchResults?: shared.AudioSearchResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
