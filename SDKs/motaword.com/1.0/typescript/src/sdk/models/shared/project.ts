import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { ErrorT } from "./error";
import { ProjectLinks } from "./projectlinks";
import { VendorProjectPair } from "./vendorprojectpair";
import { VendorProjectRoleEnum } from "./vendorprojectroleenum";
import { ProjectSourceEnum } from "./projectsourceenum";
import { ProjectStatusEnum } from "./projectstatusenum";



export class ProjectPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=usd_amount" })
  usdAmount?: number;
}


export class ProjectPriceWithoutDiscount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=usd_amount" })
  usdAmount?: number;
}


export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average_scores" })
  averageScores?: Record<string, number>;

  @SpeakeasyMetadata({ data: "json, name=budget_code" })
  budgetCode?: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: User;

  @SpeakeasyMetadata({ data: "json, name=completed_on" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=continuous_project_type" })
  continuousProjectType?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=delivery_at" })
  deliveryAt?: number;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_api_project" })
  isApiProject?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_certified" })
  isCertified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_continuous" })
  isContinuous?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_manual" })
  isManual?: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ProjectLinks;

  @SpeakeasyMetadata({ data: "json, name=pairs", elemType: VendorProjectPair })
  pairs?: VendorProjectPair[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: ProjectPrice;

  @SpeakeasyMetadata({ data: "json, name=price_without_discount" })
  priceWithoutDiscount?: ProjectPriceWithoutDiscount;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: VendorProjectRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=should_send_client_survey" })
  shouldSendClientSurvey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ProjectSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subjects" })
  subjects?: string[];

  @SpeakeasyMetadata({ data: "json, name=target_languages" })
  targetLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=tms_name" })
  tmsName?: string;

  @SpeakeasyMetadata({ data: "json, name=valid_until" })
  validUntil?: number;

  @SpeakeasyMetadata({ data: "json, name=vendor_word_count" })
  vendorWordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=word_count" })
  wordCount?: number;
}
