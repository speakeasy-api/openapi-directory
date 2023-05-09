# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccidentStatsGetRequest;
import org.openapis.openapi.models.operations.AccidentStatsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccidentStatsGetRequest req = new AccidentStatsGetRequest(548814);            

            AccidentStatsGetResponse res = sdk.accidentStats.accidentStatsGet(req);

            if (res.tflApiPresentationEntitiesAccidentStatsAccidentDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accidentStats](docs/accidentstats/README.md)

* [accidentStatsGet](docs/accidentstats/README.md#accidentstatsget) - Gets all accident details for accidents occuring in the specified year

### [airQuality](docs/airquality/README.md)

* [airQualityGet](docs/airquality/README.md#airqualityget) - Gets air quality data feed

### [bikePoint](docs/bikepoint/README.md)

* [bikePointGet](docs/bikepoint/README.md#bikepointget) - Gets the bike point with the given id.
* [bikePointGetAll](docs/bikepoint/README.md#bikepointgetall) - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* [bikePointSearch](docs/bikepoint/README.md#bikepointsearch) - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

### [cabwise](docs/cabwise/README.md)

* [cabwiseGet](docs/cabwise/README.md#cabwiseget) - Gets taxis and minicabs contact information

### [journey](docs/journey/README.md)

* [journeyJourneyResults](docs/journey/README.md#journeyjourneyresults) - Perform a Journey Planner search from the parameters specified in simple types
* [journeyMeta](docs/journey/README.md#journeymeta) - Gets a list of all of the available journey planner modes

### [line](docs/line/README.md)

* [lineArrivals](docs/line/README.md#linearrivals) - Get the list of arrival predictions for given line ids based at the given stop
* [lineDisruption](docs/line/README.md#linedisruption) - Get disruptions for the given line ids
* [lineDisruptionByMode](docs/line/README.md#linedisruptionbymode) - Get disruptions for all lines of the given modes.
* [lineGet](docs/line/README.md#lineget) - Gets lines that match the specified line ids.
* [lineGetByMode](docs/line/README.md#linegetbymode) - Gets lines that serve the given modes.
* [lineLineRoutesByIds](docs/line/README.md#linelineroutesbyids) - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* [lineMetaDisruptionCategories](docs/line/README.md#linemetadisruptioncategories) - Gets a list of valid disruption categories
* [lineMetaModes](docs/line/README.md#linemetamodes) - Gets a list of valid modes
* [lineMetaServiceTypes](docs/line/README.md#linemetaservicetypes) - Gets a list of valid ServiceTypes to filter on
* [lineMetaSeverity](docs/line/README.md#linemetaseverity) - Gets a list of valid severity codes
* [lineRoute](docs/line/README.md#lineroute) - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* [lineRouteByMode](docs/line/README.md#lineroutebymode) - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* [lineRouteSequence](docs/line/README.md#lineroutesequence) - Gets all valid routes for given line id, including the sequence of stops on each route.
* [lineSearch](docs/line/README.md#linesearch) - Search for lines or routes matching the query string
* [lineStatus](docs/line/README.md#linestatus) - Gets the line status for given line ids during the provided dates e.g Minor Delays
* [lineStatusByIds](docs/line/README.md#linestatusbyids) - Gets the line status of for given line ids e.g Minor Delays
* [lineStatusByMode](docs/line/README.md#linestatusbymode) - Gets the line status of for all lines for the given modes
* [lineStatusBySeverity](docs/line/README.md#linestatusbyseverity) - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* [lineStopPoints](docs/line/README.md#linestoppoints) - Gets a list of the stations that serve the given line id
* [lineTimetable](docs/line/README.md#linetimetable) - Gets the timetable for a specified station on the give line
* [lineTimetableTo](docs/line/README.md#linetimetableto) - Gets the timetable for a specified station on the give line with specified destination

### [mode](docs/mode/README.md)

* [modeArrivals](docs/mode/README.md#modearrivals) - Gets the next arrival predictions for all stops of a given mode
* [modeGetActiveServiceTypes](docs/mode/README.md#modegetactiveservicetypes) - Returns the service type active for a mode.
            Currently only supports tube

### [occupancy](docs/occupancy/README.md)

* [occupancyGet](docs/occupancy/README.md#occupancyget) - Gets the occupancy for a car park with a given id
* [occupancyGetAllChargeConnectorStatus](docs/occupancy/README.md#occupancygetallchargeconnectorstatus) - Gets the occupancy for all charge connectors
* [occupancyGetBikePointsOccupancies](docs/occupancy/README.md#occupancygetbikepointsoccupancies) - Get the occupancy for bike points.
* [occupancyGetChargeConnectorStatus](docs/occupancy/README.md#occupancygetchargeconnectorstatus) - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* [getOccupancyCarPark](docs/occupancy/README.md#getoccupancycarpark) - Gets the occupancy for all car parks that have occupancy data

### [place](docs/place/README.md)

* [placeGet](docs/place/README.md#placeget) - Gets the place with the given id.
* [placeGetAt](docs/place/README.md#placegetat) - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* [placeGetByGeo](docs/place/README.md#placegetbygeo) - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* [placeGetByType](docs/place/README.md#placegetbytype) - Gets all places of a given type
* [placeGetOverlay](docs/place/README.md#placegetoverlay) - Gets the place overlay for a given set of co-ordinates and a given width/height.
* [placeGetStreetsByPostCode](docs/place/README.md#placegetstreetsbypostcode) - Gets the set of streets associated with a post code.
* [placeMetaCategories](docs/place/README.md#placemetacategories) - Gets a list of all of the available place property categories and keys.
* [placeMetaPlaceTypes](docs/place/README.md#placemetaplacetypes) - Gets a list of the available types of Place.
* [placeSearch](docs/place/README.md#placesearch) - Gets all places that matches the given query

### [road](docs/road/README.md)

* [roadDisruptedStreets](docs/road/README.md#roaddisruptedstreets) - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* [roadDisruption](docs/road/README.md#roaddisruption) - Get active disruptions, filtered by road ids
* [roadDisruptionById](docs/road/README.md#roaddisruptionbyid) - Gets a list of active disruptions filtered by disruption Ids.
* [roadGet](docs/road/README.md#roadget) - Gets all roads managed by TfL
* [roadMetaCategories](docs/road/README.md#roadmetacategories) - Gets a list of valid RoadDisruption categories
* [roadMetaSeverities](docs/road/README.md#roadmetaseverities) - Gets a list of valid RoadDisruption severity codes
* [roadStatus](docs/road/README.md#roadstatus) - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* [getRoadIds](docs/road/README.md#getroadids) - Gets the road with the specified id (e.g. A1)

### [search](docs/search/README.md)

* [searchBusSchedules](docs/search/README.md#searchbusschedules) - Searches the bus schedules folder on S3 for a given bus number.
* [searchGet](docs/search/README.md#searchget) - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* [searchMetaCategories](docs/search/README.md#searchmetacategories) - Gets the available search categories.
* [searchMetaSearchProviders](docs/search/README.md#searchmetasearchproviders) - Gets the available searchProvider names.
* [searchMetaSorts](docs/search/README.md#searchmetasorts) - Gets the available sorting options.

### [stopPoint](docs/stoppoint/README.md)

* [stopPointArrivalDepartures](docs/stoppoint/README.md#stoppointarrivaldepartures) - Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)
* [stopPointArrivals](docs/stoppoint/README.md#stoppointarrivals) - Gets the list of arrival predictions for the given stop point id
* [stopPointCrowding](docs/stoppoint/README.md#stoppointcrowding) - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* [stopPointDirection](docs/stoppoint/README.md#stoppointdirection) - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* [stopPointDisruption](docs/stoppoint/README.md#stoppointdisruption) - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* [stopPointDisruptionByMode](docs/stoppoint/README.md#stoppointdisruptionbymode) - Gets a distinct list of disrupted stop points for the given modes
* [stopPointGet](docs/stoppoint/README.md#stoppointget) - Gets a list of StopPoints corresponding to the given list of stop ids.
* [stopPointGetByGeoPoint](docs/stoppoint/README.md#stoppointgetbygeopoint) - Gets a list of StopPoints within {radius} by the specified criteria
* [stopPointGetByMode](docs/stoppoint/README.md#stoppointgetbymode) - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* [stopPointGetBySms](docs/stoppoint/README.md#stoppointgetbysms) - Gets a StopPoint for a given sms code.
* [stopPointGetByType](docs/stoppoint/README.md#stoppointgetbytype) - Gets all stop points of a given type
* [stopPointGetByTypeWithPagination](docs/stoppoint/README.md#stoppointgetbytypewithpagination) - Gets all the stop points of given type(s) with a page number
* [stopPointGetCarParksById](docs/stoppoint/README.md#stoppointgetcarparksbyid) - Get car parks corresponding to the given stop point id.
* [stopPointGetServiceTypes](docs/stoppoint/README.md#stoppointgetservicetypes) - Gets the service types for a given stoppoint
* [stopPointGetTaxiRanksByIds](docs/stoppoint/README.md#stoppointgettaxiranksbyids) - Gets a list of taxi ranks corresponding to the given stop point id.
* [stopPointMetaCategories](docs/stoppoint/README.md#stoppointmetacategories) - Gets the list of available StopPoint additional information categories
* [stopPointMetaModes](docs/stoppoint/README.md#stoppointmetamodes) - Gets the list of available StopPoint modes
* [stopPointMetaStopTypes](docs/stoppoint/README.md#stoppointmetastoptypes) - Gets the list of available StopPoint types
* [stopPointReachableFrom](docs/stoppoint/README.md#stoppointreachablefrom) - Gets Stopoints that are reachable from a station/line combination.
* [stopPointRoute](docs/stoppoint/README.md#stoppointroute) - Returns the route sections for all the lines that service the given stop point ids
* [stopPointSearch](docs/stoppoint/README.md#stoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [getStopPointSearch](docs/stoppoint/README.md#getstoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [getStopPointIdPlaceTypes](docs/stoppoint/README.md#getstoppointidplacetypes) - Get a list of places corresponding to a given id and place types.

### [travelTime](docs/traveltime/README.md)

* [travelTimeGetCompareOverlay](docs/traveltime/README.md#traveltimegetcompareoverlay) - Gets the TravelTime overlay.
* [travelTimeGetOverlay](docs/traveltime/README.md#traveltimegetoverlay) - Gets the TravelTime overlay.

### [vehicle](docs/vehicle/README.md)

* [vehicleGet](docs/vehicle/README.md#vehicleget) - Gets the predictions for a given list of vehicle Id's.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
