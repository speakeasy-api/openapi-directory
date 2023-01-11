import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchVideosAspectRatioEnum {
    Four3 = "4_3",
    Sixteen9 = "16_9",
    Nonstandard = "nonstandard"
}

export enum SearchVideosLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}

export enum SearchVideosPeopleAgeEnum {
    Infants = "infants",
    Children = "children",
    Teenagers = "teenagers",
    Twentys = "20s",
    Thirtys = "30s",
    Fortys = "40s",
    Fiftys = "50s",
    Sixtys = "60s",
    Older = "older"
}

export enum SearchVideosPeopleEthnicityEnum {
    African = "african",
    AfricanAmerican = "african_american",
    Black = "black",
    Brazilian = "brazilian",
    Chinese = "chinese",
    Caucasian = "caucasian",
    EastAsian = "east_asian",
    Hispanic = "hispanic",
    Japanese = "japanese",
    MiddleEastern = "middle_eastern",
    NativeAmerican = "native_american",
    PacificIslander = "pacific_islander",
    SouthAsian = "south_asian",
    SoutheastAsian = "southeast_asian",
    Other = "other"
}

export enum SearchVideosPeopleGenderEnum {
    Male = "male",
    Female = "female",
    Both = "both"
}

export enum SearchVideosResolutionEnum {
    Fourk = "4k",
    StandardDefinition = "standard_definition",
    HighDefinition = "high_definition"
}

export enum SearchVideosSortEnum {
    Newest = "newest",
    Popular = "popular",
    Relevance = "relevance",
    Random = "random"
}

export enum SearchVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class SearchVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=added_date" })
  addedDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=added_date_end" })
  addedDateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=added_date_start" })
  addedDateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aspect_ratio" })
  aspectRatio?: SearchVideosAspectRatioEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_country" })
  contributorCountry?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration_from" })
  durationFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration_to" })
  durationTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fps" })
  fps?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fps_from" })
  fpsFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fps_to" })
  fpsTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword_safe_search" })
  keywordSafeSearch?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: shared.LanguageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: SearchVideosLicenseEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_age" })
  peopleAge?: SearchVideosPeopleAgeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_ethnicity" })
  peopleEthnicity?: SearchVideosPeopleEthnicityEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_gender" })
  peopleGender?: SearchVideosPeopleGenderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_model_released" })
  peopleModelReleased?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_number" })
  peopleNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: SearchVideosResolutionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe" })
  safe?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchVideosSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: SearchVideosViewEnum;
}


export class SearchVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class SearchVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchVideosQueryParams;

  @SpeakeasyMetadata()
  security: SearchVideosSecurity;
}


export class SearchVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoSearchResults?: shared.VideoSearchResults;
}
