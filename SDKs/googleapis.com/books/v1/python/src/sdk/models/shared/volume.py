import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import downloadaccessrestriction as shared_downloadaccessrestriction
from ..shared import readingposition as shared_readingposition
from ..shared import review as shared_review
from ..shared import volumeseriesinfo as shared_volumeseriesinfo


@dataclass_json
@dataclasses.dataclass
class VolumeAccessInfoEpub:
    r"""VolumeAccessInfoEpub
    Information about epub content. (In LITE projection.)
    """
    
    acs_token_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acsTokenLink') }})
    download_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadLink') }})
    is_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAvailable') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeAccessInfoPdf:
    r"""VolumeAccessInfoPdf
    Information about pdf content. (In LITE projection.)
    """
    
    acs_token_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acsTokenLink') }})
    download_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadLink') }})
    is_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAvailable') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeAccessInfo:
    r"""VolumeAccessInfo
    Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
    """
    
    access_view_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessViewStatus') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    download_access: Optional[shared_downloadaccessrestriction.DownloadAccessRestriction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadAccess') }})
    drive_imported_content_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveImportedContentLink') }})
    embeddable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddable') }})
    epub: Optional[VolumeAccessInfoEpub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epub') }})
    explicit_offline_license_management: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitOfflineLicenseManagement') }})
    pdf: Optional[VolumeAccessInfoPdf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf') }})
    public_domain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicDomain') }})
    quote_sharing_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteSharingAllowed') }})
    text_to_speech_permission: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToSpeechPermission') }})
    view_order_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewOrderUrl') }})
    viewability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewability') }})
    web_reader_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webReaderLink') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeLayerInfoLayers:
    layer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerId') }})
    volume_annotations_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeAnnotationsVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeLayerInfo:
    r"""VolumeLayerInfo
    What layers exist in this volume and high level information about them.
    """
    
    layers: Optional[list[VolumeLayerInfoLayers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layers') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeRecommendedInfo:
    r"""VolumeRecommendedInfo
    Recommendation related information for this volume.
    """
    
    explanation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSaleInfoListPrice:
    r"""VolumeSaleInfoListPrice
    Suggested retail price. (In LITE projection.)
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSaleInfoOffersListPrice:
    r"""VolumeSaleInfoOffersListPrice
    Offer list (=undiscounted) price in Micros.
    """
    
    amount_in_micros: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountInMicros') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSaleInfoOffersRentalDuration:
    r"""VolumeSaleInfoOffersRentalDuration
    The rental duration (for rental offers only).
    """
    
    count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSaleInfoOffersRetailPrice:
    r"""VolumeSaleInfoOffersRetailPrice
    Offer retail (=discounted) price in Micros
    """
    
    amount_in_micros: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountInMicros') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSaleInfoOffers:
    finsky_offer_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finskyOfferType') }})
    giftable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftable') }})
    list_price: Optional[VolumeSaleInfoOffersListPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    rental_duration: Optional[VolumeSaleInfoOffersRentalDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalDuration') }})
    retail_price: Optional[VolumeSaleInfoOffersRetailPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retailPrice') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSaleInfoRetailPrice:
    r"""VolumeSaleInfoRetailPrice
    The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSaleInfo:
    r"""VolumeSaleInfo
    Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
    """
    
    buy_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyLink') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    is_ebook: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEbook') }})
    list_price: Optional[VolumeSaleInfoListPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    offers: Optional[list[VolumeSaleInfoOffers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers') }})
    on_sale_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onSaleDate') }})
    retail_price: Optional[VolumeSaleInfoRetailPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retailPrice') }})
    saleability: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleability') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeSearchInfo:
    r"""VolumeSearchInfo
    Search result information related to this volume.
    """
    
    text_snippet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSnippet') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeUserInfoCopy:
    r"""VolumeUserInfoCopy
    Copy/Paste accounting information.
    """
    
    allowed_character_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedCharacterCount') }})
    limit_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitType') }})
    remaining_character_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCharacterCount') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeUserInfoFamilySharing:
    r"""VolumeUserInfoFamilySharing
    Information on the ability to share with the family.
    """
    
    family_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyRole') }})
    is_sharing_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSharingAllowed') }})
    is_sharing_disabled_by_fop: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSharingDisabledByFop') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeUserInfoRentalPeriod:
    r"""VolumeUserInfoRentalPeriod
    Period during this book is/was a valid rental.
    """
    
    end_utc_sec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endUtcSec') }})
    start_utc_sec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startUtcSec') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeUserInfoUserUploadedVolumeInfo:
    processing_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingState') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeUserInfo:
    r"""VolumeUserInfo
    User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
    """
    
    acquired_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquiredTime') }})
    acquisition_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquisitionType') }})
    copy: Optional[VolumeUserInfoCopy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    entitlement_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlementType') }})
    family_sharing: Optional[VolumeUserInfoFamilySharing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familySharing') }})
    is_family_shared_from_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharedFromUser') }})
    is_family_shared_to_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharedToUser') }})
    is_family_sharing_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharingAllowed') }})
    is_family_sharing_disabled_by_fop: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFamilySharingDisabledByFop') }})
    is_in_my_books: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInMyBooks') }})
    is_preordered: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPreordered') }})
    is_purchased: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPurchased') }})
    is_uploaded: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUploaded') }})
    reading_position: Optional[shared_readingposition.ReadingPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readingPosition') }})
    rental_period: Optional[VolumeUserInfoRentalPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalPeriod') }})
    rental_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalState') }})
    review: Optional[shared_review.Review] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    user_uploaded_volume_info: Optional[VolumeUserInfoUserUploadedVolumeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userUploadedVolumeInfo') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeVolumeInfoDimensions:
    r"""VolumeVolumeInfoDimensions
    Physical dimensions of this volume.
    """
    
    height: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    thickness: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thickness') }})
    width: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeVolumeInfoImageLinks:
    r"""VolumeVolumeInfoImageLinks
    A list of image links for all the sizes that are available. (In LITE projection.)
    """
    
    extra_large: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraLarge') }})
    large: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large') }})
    medium: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    small: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('small') }})
    small_thumbnail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallThumbnail') }})
    thumbnail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeVolumeInfoIndustryIdentifiers:
    identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeVolumeInfoPanelizationSummary:
    r"""VolumeVolumeInfoPanelizationSummary
    A top-level summary of the panelization info in this volume.
    """
    
    contains_epub_bubbles: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsEpubBubbles') }})
    contains_image_bubbles: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsImageBubbles') }})
    epub_bubble_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epubBubbleVersion') }})
    image_bubble_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageBubbleVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeVolumeInfoReadingModes:
    r"""VolumeVolumeInfoReadingModes
    The reading modes available for this volume.
    """
    
    image: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    text: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class VolumeVolumeInfo:
    r"""VolumeVolumeInfo
    General volume information.
    """
    
    allow_anon_logging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAnonLogging') }})
    authors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authors') }})
    average_rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageRating') }})
    canonical_volume_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalVolumeLink') }})
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    comics_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comicsContent') }})
    content_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentVersion') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dimensions: Optional[VolumeVolumeInfoDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    image_links: Optional[VolumeVolumeInfoImageLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLinks') }})
    industry_identifiers: Optional[list[VolumeVolumeInfoIndustryIdentifiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('industryIdentifiers') }})
    info_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoLink') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    main_category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainCategory') }})
    maturity_rating: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maturityRating') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCount') }})
    panelization_summary: Optional[VolumeVolumeInfoPanelizationSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelizationSummary') }})
    preview_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewLink') }})
    print_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printType') }})
    printed_page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printedPageCount') }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedDate') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    ratings_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingsCount') }})
    reading_modes: Optional[VolumeVolumeInfoReadingModes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readingModes') }})
    sample_page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplePageCount') }})
    series_info: Optional[shared_volumeseriesinfo.Volumeseriesinfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesInfo') }})
    subtitle: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class Volume:
    access_info: Optional[VolumeAccessInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessInfo') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    layer_info: Optional[VolumeLayerInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerInfo') }})
    recommended_info: Optional[VolumeRecommendedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedInfo') }})
    sale_info: Optional[VolumeSaleInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleInfo') }})
    search_info: Optional[VolumeSearchInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchInfo') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    user_info: Optional[VolumeUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    volume_info: Optional[VolumeVolumeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeInfo') }})
    
