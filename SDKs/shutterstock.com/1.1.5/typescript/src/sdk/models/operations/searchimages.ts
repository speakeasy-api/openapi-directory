import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchImagesImageTypeEnum {
    Photo = "photo",
    Illustration = "illustration",
    Vector = "vector"
}

export enum SearchImagesLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial",
    Enhanced = "enhanced"
}

export enum SearchImagesOrientationEnum {
    Horizontal = "horizontal",
    Vertical = "vertical"
}

export enum SearchImagesPeopleAgeEnum {
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

export enum SearchImagesPeopleEthnicityEnum {
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

export enum SearchImagesPeopleGenderEnum {
    Male = "male",
    Female = "female",
    Both = "both"
}

export enum SearchImagesSortEnum {
    Newest = "newest",
    Popular = "popular",
    Relevance = "relevance",
    Random = "random"
}

export enum SearchImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class SearchImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=added_date" })
  addedDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=added_date_end" })
  addedDateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=added_date_start" })
  addedDateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aspect_ratio" })
  aspectRatio?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aspect_ratio_max" })
  aspectRatioMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aspect_ratio_min" })
  aspectRatioMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_country" })
  contributorCountry?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height_from" })
  heightFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height_to" })
  heightTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_type" })
  imageType?: SearchImagesImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword_safe_search" })
  keywordSafeSearch?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: shared.LanguageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: SearchImagesLicenseEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orientation" })
  orientation?: SearchImagesOrientationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_age" })
  peopleAge?: SearchImagesPeopleAgeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_ethnicity" })
  peopleEthnicity?: SearchImagesPeopleEthnicityEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_gender" })
  peopleGender?: SearchImagesPeopleGenderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_model_released" })
  peopleModelReleased?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people_number" })
  peopleNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe" })
  safe?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchImagesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spellcheck_query" })
  spellcheckQuery?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: SearchImagesViewEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width_from" })
  widthFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width_to" })
  widthTo?: number;
}


export class SearchImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class SearchImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchImagesQueryParams;

  @SpeakeasyMetadata()
  security: SearchImagesSecurity;
}


export class SearchImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageSearchResults?: shared.ImageSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
