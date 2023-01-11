import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProofreaderWithLanguage } from "./proofreaderwithlanguage";



// ClientProfileNpsAverage
/** 
 * information for all nps survey that this client completed
**/
export class ClientProfileNpsAverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed_surveys_count" })
  completedSurveysCount?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}


// ClientProfileNpsLast
/** 
 * last survey info
**/
export class ClientProfileNpsLast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion_date" })
  completionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}


// ClientProfileNps
/** 
 * net promoter score info for this client
**/
export class ClientProfileNps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: ClientProfileNpsAverage;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: ClientProfileNpsLast;
}


export class ClientProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_creation_date" })
  accountCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=client_project_count" })
  clientProjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=corporate" })
  corporate?: string;

  @SpeakeasyMetadata({ data: "json, name=corporate_id" })
  corporateId?: number;

  @SpeakeasyMetadata({ data: "json, name=corporate_user_count" })
  corporateUserCount?: number;

  @SpeakeasyMetadata({ data: "json, name=frequent_file_extension" })
  frequentFileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=frequent_language_pairs" })
  frequentLanguagePairs?: string[];

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=growth" })
  growth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_complex" })
  isComplex?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_12_months_spending" })
  last12MonthsSpending?: number;

  @SpeakeasyMetadata({ data: "json, name=last_project" })
  lastProject?: number;

  @SpeakeasyMetadata({ data: "json, name=last_project_time" })
  lastProjectTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_proofreaders", elemType: ProofreaderWithLanguage })
  lastProofreaders?: ProofreaderWithLanguage[];

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=nps" })
  nps?: ClientProfileNps;

  @SpeakeasyMetadata({ data: "json, name=user_rank_in_project_count" })
  userRankInProjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=user_rank_in_spending" })
  userRankInSpending?: number;
}
