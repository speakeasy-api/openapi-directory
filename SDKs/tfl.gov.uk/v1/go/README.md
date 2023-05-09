# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tfl.gov.uk/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccidentStats.AccidentStatsGet(ctx, operations.AccidentStatsGetRequest{
        Year: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesAccidentStatsAccidentDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccidentStats](docs/accidentstats/README.md)

* [AccidentStatsGet](docs/accidentstats/README.md#accidentstatsget) - Gets all accident details for accidents occuring in the specified year

### [AirQuality](docs/airquality/README.md)

* [AirQualityGet](docs/airquality/README.md#airqualityget) - Gets air quality data feed

### [BikePoint](docs/bikepoint/README.md)

* [BikePointGet](docs/bikepoint/README.md#bikepointget) - Gets the bike point with the given id.
* [BikePointGetAll](docs/bikepoint/README.md#bikepointgetall) - Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
* [BikePointSearch](docs/bikepoint/README.md#bikepointsearch) - Search for bike stations by their name, a bike point's name often contains information about the name of the street
            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.

### [Cabwise](docs/cabwise/README.md)

* [CabwiseGet](docs/cabwise/README.md#cabwiseget) - Gets taxis and minicabs contact information

### [Journey](docs/journey/README.md)

* [JourneyJourneyResults](docs/journey/README.md#journeyjourneyresults) - Perform a Journey Planner search from the parameters specified in simple types
* [JourneyMeta](docs/journey/README.md#journeymeta) - Gets a list of all of the available journey planner modes

### [Line](docs/line/README.md)

* [LineArrivals](docs/line/README.md#linearrivals) - Get the list of arrival predictions for given line ids based at the given stop
* [LineDisruption](docs/line/README.md#linedisruption) - Get disruptions for the given line ids
* [LineDisruptionByMode](docs/line/README.md#linedisruptionbymode) - Get disruptions for all lines of the given modes.
* [LineGet](docs/line/README.md#lineget) - Gets lines that match the specified line ids.
* [LineGetByMode](docs/line/README.md#linegetbymode) - Gets lines that serve the given modes.
* [LineLineRoutesByIds](docs/line/README.md#linelineroutesbyids) - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* [LineMetaDisruptionCategories](docs/line/README.md#linemetadisruptioncategories) - Gets a list of valid disruption categories
* [LineMetaModes](docs/line/README.md#linemetamodes) - Gets a list of valid modes
* [LineMetaServiceTypes](docs/line/README.md#linemetaservicetypes) - Gets a list of valid ServiceTypes to filter on
* [LineMetaSeverity](docs/line/README.md#linemetaseverity) - Gets a list of valid severity codes
* [LineRoute](docs/line/README.md#lineroute) - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* [LineRouteByMode](docs/line/README.md#lineroutebymode) - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* [LineRouteSequence](docs/line/README.md#lineroutesequence) - Gets all valid routes for given line id, including the sequence of stops on each route.
* [LineSearch](docs/line/README.md#linesearch) - Search for lines or routes matching the query string
* [LineStatus](docs/line/README.md#linestatus) - Gets the line status for given line ids during the provided dates e.g Minor Delays
* [LineStatusByIds](docs/line/README.md#linestatusbyids) - Gets the line status of for given line ids e.g Minor Delays
* [LineStatusByMode](docs/line/README.md#linestatusbymode) - Gets the line status of for all lines for the given modes
* [LineStatusBySeverity](docs/line/README.md#linestatusbyseverity) - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* [LineStopPoints](docs/line/README.md#linestoppoints) - Gets a list of the stations that serve the given line id
* [LineTimetable](docs/line/README.md#linetimetable) - Gets the timetable for a specified station on the give line
* [LineTimetableTo](docs/line/README.md#linetimetableto) - Gets the timetable for a specified station on the give line with specified destination

### [Mode](docs/mode/README.md)

* [ModeArrivals](docs/mode/README.md#modearrivals) - Gets the next arrival predictions for all stops of a given mode
* [ModeGetActiveServiceTypes](docs/mode/README.md#modegetactiveservicetypes) - Returns the service type active for a mode.
            Currently only supports tube

### [Occupancy](docs/occupancy/README.md)

* [OccupancyGet](docs/occupancy/README.md#occupancyget) - Gets the occupancy for a car park with a given id
* [OccupancyGetAllChargeConnectorStatus](docs/occupancy/README.md#occupancygetallchargeconnectorstatus) - Gets the occupancy for all charge connectors
* [OccupancyGetBikePointsOccupancies](docs/occupancy/README.md#occupancygetbikepointsoccupancies) - Get the occupancy for bike points.
* [OccupancyGetChargeConnectorStatus](docs/occupancy/README.md#occupancygetchargeconnectorstatus) - Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
* [GetOccupancyCarPark](docs/occupancy/README.md#getoccupancycarpark) - Gets the occupancy for all car parks that have occupancy data

### [Place](docs/place/README.md)

* [PlaceGet](docs/place/README.md#placeget) - Gets the place with the given id.
* [PlaceGetAt](docs/place/README.md#placegetat) - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* [PlaceGetByGeo](docs/place/README.md#placegetbygeo) - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* [PlaceGetByType](docs/place/README.md#placegetbytype) - Gets all places of a given type
* [PlaceGetOverlay](docs/place/README.md#placegetoverlay) - Gets the place overlay for a given set of co-ordinates and a given width/height.
* [PlaceGetStreetsByPostCode](docs/place/README.md#placegetstreetsbypostcode) - Gets the set of streets associated with a post code.
* [PlaceMetaCategories](docs/place/README.md#placemetacategories) - Gets a list of all of the available place property categories and keys.
* [PlaceMetaPlaceTypes](docs/place/README.md#placemetaplacetypes) - Gets a list of the available types of Place.
* [PlaceSearch](docs/place/README.md#placesearch) - Gets all places that matches the given query

### [Road](docs/road/README.md)

* [RoadDisruptedStreets](docs/road/README.md#roaddisruptedstreets) - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* [RoadDisruption](docs/road/README.md#roaddisruption) - Get active disruptions, filtered by road ids
* [RoadDisruptionByID](docs/road/README.md#roaddisruptionbyid) - Gets a list of active disruptions filtered by disruption Ids.
* [RoadGet](docs/road/README.md#roadget) - Gets all roads managed by TfL
* [RoadMetaCategories](docs/road/README.md#roadmetacategories) - Gets a list of valid RoadDisruption categories
* [RoadMetaSeverities](docs/road/README.md#roadmetaseverities) - Gets a list of valid RoadDisruption severity codes
* [RoadStatus](docs/road/README.md#roadstatus) - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* [GetRoadIds](docs/road/README.md#getroadids) - Gets the road with the specified id (e.g. A1)

### [Search](docs/search/README.md)

* [SearchBusSchedules](docs/search/README.md#searchbusschedules) - Searches the bus schedules folder on S3 for a given bus number.
* [SearchGet](docs/search/README.md#searchget) - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* [SearchMetaCategories](docs/search/README.md#searchmetacategories) - Gets the available search categories.
* [SearchMetaSearchProviders](docs/search/README.md#searchmetasearchproviders) - Gets the available searchProvider names.
* [SearchMetaSorts](docs/search/README.md#searchmetasorts) - Gets the available sorting options.

### [StopPoint](docs/stoppoint/README.md)

* [StopPointArrivalDepartures](docs/stoppoint/README.md#stoppointarrivaldepartures) - Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)
* [StopPointArrivals](docs/stoppoint/README.md#stoppointarrivals) - Gets the list of arrival predictions for the given stop point id
* [StopPointCrowding](docs/stoppoint/README.md#stoppointcrowding) - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* [StopPointDirection](docs/stoppoint/README.md#stoppointdirection) - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* [StopPointDisruption](docs/stoppoint/README.md#stoppointdisruption) - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* [StopPointDisruptionByMode](docs/stoppoint/README.md#stoppointdisruptionbymode) - Gets a distinct list of disrupted stop points for the given modes
* [StopPointGet](docs/stoppoint/README.md#stoppointget) - Gets a list of StopPoints corresponding to the given list of stop ids.
* [StopPointGetByGeoPoint](docs/stoppoint/README.md#stoppointgetbygeopoint) - Gets a list of StopPoints within {radius} by the specified criteria
* [StopPointGetByMode](docs/stoppoint/README.md#stoppointgetbymode) - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* [StopPointGetBySms](docs/stoppoint/README.md#stoppointgetbysms) - Gets a StopPoint for a given sms code.
* [StopPointGetByType](docs/stoppoint/README.md#stoppointgetbytype) - Gets all stop points of a given type
* [StopPointGetByTypeWithPagination](docs/stoppoint/README.md#stoppointgetbytypewithpagination) - Gets all the stop points of given type(s) with a page number
* [StopPointGetCarParksByID](docs/stoppoint/README.md#stoppointgetcarparksbyid) - Get car parks corresponding to the given stop point id.
* [StopPointGetServiceTypes](docs/stoppoint/README.md#stoppointgetservicetypes) - Gets the service types for a given stoppoint
* [StopPointGetTaxiRanksByIds](docs/stoppoint/README.md#stoppointgettaxiranksbyids) - Gets a list of taxi ranks corresponding to the given stop point id.
* [StopPointMetaCategories](docs/stoppoint/README.md#stoppointmetacategories) - Gets the list of available StopPoint additional information categories
* [StopPointMetaModes](docs/stoppoint/README.md#stoppointmetamodes) - Gets the list of available StopPoint modes
* [StopPointMetaStopTypes](docs/stoppoint/README.md#stoppointmetastoptypes) - Gets the list of available StopPoint types
* [StopPointReachableFrom](docs/stoppoint/README.md#stoppointreachablefrom) - Gets Stopoints that are reachable from a station/line combination.
* [StopPointRoute](docs/stoppoint/README.md#stoppointroute) - Returns the route sections for all the lines that service the given stop point ids
* [StopPointSearch](docs/stoppoint/README.md#stoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [GetStopPointSearch](docs/stoppoint/README.md#getstoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [GetStopPointIDPlaceTypes](docs/stoppoint/README.md#getstoppointidplacetypes) - Get a list of places corresponding to a given id and place types.

### [TravelTime](docs/traveltime/README.md)

* [TravelTimeGetCompareOverlay](docs/traveltime/README.md#traveltimegetcompareoverlay) - Gets the TravelTime overlay.
* [TravelTimeGetOverlay](docs/traveltime/README.md#traveltimegetoverlay) - Gets the TravelTime overlay.

### [Vehicle](docs/vehicle/README.md)

* [VehicleGet](docs/vehicle/README.md#vehicleget) - Gets the predictions for a given list of vehicle Id's.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
